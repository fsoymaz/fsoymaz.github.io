pipeline {
    agent any
    
    environment {
        DOTNET_VERSION = '8.0'
        NODE_VERSION = '18'
        GITHUB_TOKEN = credentials('31')
        GITHUB_REPO = 'fsoymaz/fsoymaz.github.io'
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
                        # Disable nvm auto-use to avoid .npmrc conflicts
                        export NVM_AUTO_MODE="none"
                        # Temporarily disable .npmrc BEFORE sourcing nvm.sh
                        if [ -f "$HOME/.npmrc" ]; then
                            mv "$HOME/.npmrc" "$HOME/.npmrc.backup" || true
                        fi
                        if ! command -v node &> /dev/null; then
                            curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
                            export NVM_DIR="$HOME/.nvm"
                            [ -s "$NVM_DIR/nvm.sh" ] && source "$NVM_DIR/nvm.sh"
                            nvm install ${NODE_VERSION}
                        fi
                        export NVM_DIR="$HOME/.nvm"
                        [ -s "$NVM_DIR/nvm.sh" ] && source "$NVM_DIR/nvm.sh"
                        # Use node directly from PATH without nvm use
                        export PATH="$NVM_DIR/versions/node/v${NODE_VERSION}/bin:$PATH" 2>/dev/null || export PATH="$NVM_DIR/versions/node/${NODE_VERSION}/bin:$PATH" 2>/dev/null || true
                        # Restore .npmrc
                        if [ -f "$HOME/.npmrc.backup" ]; then
                            mv "$HOME/.npmrc.backup" "$HOME/.npmrc" || true
                        fi
                        node --version
                        npm --version
                    '''
                    
                    // Build Frontend
                    sh '''
                        # Disable nvm auto-use to avoid .npmrc conflicts
                        export NVM_AUTO_MODE="none"
                        # Temporarily disable .npmrc BEFORE sourcing nvm.sh
                        if [ -f "$HOME/.npmrc" ]; then
                            mv "$HOME/.npmrc" "$HOME/.npmrc.backup" || true
                        fi
                        export NVM_DIR="$HOME/.nvm"
                        [ -s "$NVM_DIR/nvm.sh" ] && source "$NVM_DIR/nvm.sh"
                        # Use node directly from PATH without nvm use
                        export PATH="$NVM_DIR/versions/node/v${NODE_VERSION}/bin:$PATH" 2>/dev/null || export PATH="$NVM_DIR/versions/node/${NODE_VERSION}/bin:$PATH" 2>/dev/null || true
                        # Restore .npmrc
                        if [ -f "$HOME/.npmrc.backup" ]; then
                            mv "$HOME/.npmrc.backup" "$HOME/.npmrc" || true
                        fi
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
                            
                            # Fetch all branches
                            git fetch origin
                            
                            # Main branch'e geç
                            git checkout main || git checkout -b main origin/main
                            
                            # .gitattributes merge stratejisini kullanarak merge yap
                            # Test dosyaları otomatik olarak exclude edilecek
                            git merge origin/test --no-edit -m "Merge test to main [skip ci]" -X ours || {
                                echo "Merge conflict or error occurred"
                                exit 1
                            }
                            
                            # Eğer test klasörü hala varsa (gitattributes çalışmadıysa), manuel olarak kaldır
                            if [ -d "Backend.Tests" ]; then
                                git rm -rf Backend.Tests/ 2>/dev/null || true
                                git commit -m "Remove test files from main branch [skip ci]" || echo "No changes to commit"
                            fi
                            
                            # Push et (GitHub token ile)
                            git remote set-url origin https://${GITHUB_TOKEN}@github.com/${GITHUB_REPO}.git
                            git push origin main || {
                                echo "Push failed. Check GitHub token permissions."
                                exit 1
                            }
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
                        # Disable nvm auto-use to avoid .npmrc conflicts
                        export NVM_AUTO_MODE="none"
                        # Temporarily disable .npmrc BEFORE sourcing nvm.sh
                        if [ -f "$HOME/.npmrc" ]; then
                            mv "$HOME/.npmrc" "$HOME/.npmrc.backup" || true
                        fi
                        if ! command -v node &> /dev/null; then
                            curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
                            export NVM_DIR="$HOME/.nvm"
                            [ -s "$NVM_DIR/nvm.sh" ] && source "$NVM_DIR/nvm.sh"
                            nvm install ${NODE_VERSION}
                        fi
                        export NVM_DIR="$HOME/.nvm"
                        [ -s "$NVM_DIR/nvm.sh" ] && source "$NVM_DIR/nvm.sh"
                        # Use node directly from PATH without nvm use
                        export PATH="$NVM_DIR/versions/node/v${NODE_VERSION}/bin:$PATH" 2>/dev/null || export PATH="$NVM_DIR/versions/node/${NODE_VERSION}/bin:$PATH" 2>/dev/null || true
                        # Restore .npmrc
                        if [ -f "$HOME/.npmrc.backup" ]; then
                            mv "$HOME/.npmrc.backup" "$HOME/.npmrc" || true
                        fi
                        node --version
                        npm --version
                    '''
                    
                    // Build Frontend
                    sh '''
                        # Disable nvm auto-use to avoid .npmrc conflicts
                        export NVM_AUTO_MODE="none"
                        # Temporarily disable .npmrc BEFORE sourcing nvm.sh
                        if [ -f "$HOME/.npmrc" ]; then
                            mv "$HOME/.npmrc" "$HOME/.npmrc.backup" || true
                        fi
                        export NVM_DIR="$HOME/.nvm"
                        [ -s "$NVM_DIR/nvm.sh" ] && source "$NVM_DIR/nvm.sh"
                        # Use node directly from PATH without nvm use
                        export PATH="$NVM_DIR/versions/node/v${NODE_VERSION}/bin:$PATH" 2>/dev/null || export PATH="$NVM_DIR/versions/node/${NODE_VERSION}/bin:$PATH" 2>/dev/null || true
                        # Restore .npmrc
                        if [ -f "$HOME/.npmrc.backup" ]; then
                            mv "$HOME/.npmrc.backup" "$HOME/.npmrc" || true
                        fi
                        cd frontend
                        npm install
                        npm run build
                    '''
                    
                    // Deploy to GitHub Pages
                    sh '''
                        # Disable nvm auto-use to avoid .npmrc conflicts
                        export NVM_AUTO_MODE="none"
                        # Temporarily disable .npmrc BEFORE sourcing nvm.sh
                        if [ -f "$HOME/.npmrc" ]; then
                            mv "$HOME/.npmrc" "$HOME/.npmrc.backup" || true
                        fi
                        export NVM_DIR="$HOME/.nvm"
                        [ -s "$NVM_DIR/nvm.sh" ] && source "$NVM_DIR/nvm.sh"
                        # Use node directly from PATH without nvm use
                        export PATH="$NVM_DIR/versions/node/v${NODE_VERSION}/bin:$PATH" 2>/dev/null || export PATH="$NVM_DIR/versions/node/${NODE_VERSION}/bin:$PATH" 2>/dev/null || true
                        # Restore .npmrc
                        if [ -f "$HOME/.npmrc.backup" ]; then
                            mv "$HOME/.npmrc.backup" "$HOME/.npmrc" || true
                        fi
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

