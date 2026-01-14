pipeline {
    agent any
    
    environment {
        DOTNET_VERSION = '8.0'
        NODE_VERSION = '18'
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
                script {
                    env.BRANCH_NAME = env.GIT_BRANCH.replaceAll('origin/', '')
                }
            }
        }
        
        stage('Test Branch - Build & Test') {
            when {
                branch 'test'
            }
            steps {
                script {
                    echo "Test branch detected. Running build and tests..."
                    
                    // .NET Setup
                    sh '''
                        if [ ! -d "$HOME/.dotnet" ]; then
                            curl -sSL https://dot.net/v1/dotnet-install.sh | bash /dev/stdin --version 8.0.0
                        fi
                        export PATH="$HOME/.dotnet:$PATH"
                        dotnet --version
                    '''
                    
                    // Restore and Build Backend
                    sh '''
                        export PATH="$HOME/.dotnet:$PATH"
                        cd Backend
                        dotnet restore
                        dotnet build --configuration Release --no-restore
                    '''
                    
                    // Run Unit Tests
                    sh '''
                        export PATH="$HOME/.dotnet:$PATH"
                        cd Backend.Tests
                        dotnet test --configuration Release --no-build --verbosity normal --logger "trx;LogFileName=test-results.trx" || {
                            echo "Tests failed! Deployment will not proceed."
                            exit 1
                        }
                    '''
                    
                    // Node.js Setup
                    sh '''
                        if ! command -v node &> /dev/null; then
                            curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
                            export NVM_DIR="$HOME/.nvm"
                            [ -s "$NVM_DIR/nvm.sh" ] && source "$NVM_DIR/nvm.sh"
                            nvm install ${NODE_VERSION}
                            nvm use ${NODE_VERSION}
                        fi
                        node --version
                        npm --version
                    '''
                    
                    // Build Frontend
                    sh '''
                        export NVM_DIR="$HOME/.nvm"
                        [ -s "$NVM_DIR/nvm.sh" ] && source "$NVM_DIR/nvm.sh"
                        nvm use ${NODE_VERSION}
                        cd frontend
                        npm install
                        npm run build
                    '''
                    
                    echo "Test branch build and tests completed successfully!"
                }
            }
            post {
                success {
                    script {
                        echo "Test branch build successful. Merging to main (excluding test files)..."
                        sh '''
                            git config user.name "Jenkins"
                            git config user.email "jenkins@ci"
                            
                            # Main branch'e geç
                            git checkout main || git checkout -b main
                            
                            # .gitattributes merge stratejisini kullanarak merge yap
                            # Test dosyaları otomatik olarak exclude edilecek
                            git merge test --no-edit -m "Merge test to main [skip ci]" -X ours || {
                                echo "Merge conflict or error occurred"
                                exit 1
                            }
                            
                            # Eğer test klasörü hala varsa (gitattributes çalışmadıysa), manuel olarak kaldır
                            if [ -d "Backend.Tests" ]; then
                                git rm -rf Backend.Tests/ 2>/dev/null || true
                                git commit --amend --no-edit || echo "No changes to amend"
                            fi
                            
                            # Push et
                            git push origin main || echo "No changes to push or push failed"
                        '''
                    }
                }
                failure {
                    script {
                        echo "Test branch build or tests failed. Deployment cancelled. Previous version will remain."
                        currentBuild.result = 'FAILURE'
                    }
                }
            }
        }
        
        stage('Main Branch - Production Deploy') {
            when {
                anyOf {
                    branch 'main'
                    expression { params.DEPLOY_TO_PRODUCTION == true }
                }
            }
            steps {
                script {
                    echo "Main branch detected. Preparing production deployment..."
                    
                    // .NET Setup
                    sh '''
                        if [ ! -d "$HOME/.dotnet" ]; then
                            curl -sSL https://dot.net/v1/dotnet-install.sh | bash /dev/stdin --version 8.0.0
                        fi
                        export PATH="$HOME/.dotnet:$PATH"
                        dotnet --version
                    '''
                    
                    // Build Backend
                    sh '''
                        export PATH="$HOME/.dotnet:$PATH"
                        cd Backend
                        dotnet restore
                        dotnet build --configuration Release --no-restore
                    '''
                    
                    // Node.js Setup
                    sh '''
                        if ! command -v node &> /dev/null; then
                            curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
                            export NVM_DIR="$HOME/.nvm"
                            [ -s "$NVM_DIR/nvm.sh" ] && source "$NVM_DIR/nvm.sh"
                            nvm install ${NODE_VERSION}
                            nvm use ${NODE_VERSION}
                        fi
                        node --version
                        npm --version
                    '''
                    
                    // Build Frontend
                    sh '''
                        export NVM_DIR="$HOME/.nvm"
                        [ -s "$NVM_DIR/nvm.sh" ] && source "$NVM_DIR/nvm.sh"
                        nvm use ${NODE_VERSION}
                        cd frontend
                        npm install
                        npm run build
                    '''
                    
                    // Deploy to GitHub Pages
                    sh '''
                        export NVM_DIR="$HOME/.nvm"
                        [ -s "$NVM_DIR/nvm.sh" ] && source "$NVM_DIR/nvm.sh"
                        nvm use ${NODE_VERSION}
                        npm install -g gh-pages
                        cd frontend
                        # GITHUB_TOKEN ve GITHUB_REPO environment variable'ları Jenkins'te tanımlanmalı
                        gh-pages -d build -r https://${GITHUB_TOKEN}@github.com/${GITHUB_REPO:-fsoymaz/fsoymaz.github.io}.git
                    '''
                    
                    echo "Production deployment completed!"
                }
            }
        }
    }
    
    post {
        always {
            // Cleanup
            cleanWs()
        }
        success {
            echo "Pipeline completed successfully!"
        }
        failure {
            echo "Pipeline failed. Previous deployment remains active."
        }
    }
}

