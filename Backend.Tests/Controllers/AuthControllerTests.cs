using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Moq;
using Backend.Controllers;
using Backend.Data;
using Backend.DTOs;
using Backend.Tests.Helpers;
using Xunit;

namespace Backend.Tests.Controllers;

public class AuthControllerTests
{
    private readonly Mock<ILogger<AuthController>> _mockLogger;

    public AuthControllerTests()
    {
        _mockLogger = new Mock<ILogger<AuthController>>();
    }

    [Fact]
    public async Task Register_WithValidData_ReturnsSuccess()
    {
        // Arrange
        var context = TestDbContextHelper.CreateInMemoryDbContext();
        var controller = new AuthController(context, _mockLogger.Object);
        var registerDto = new RegisterDto
        {
            Username = "newuser",
            Email = "newuser@example.com",
            Password = "Test123!"
        };

        // Act
        var result = await controller.Register(registerDto);

        // Assert
        var okResult = Assert.IsType<OkObjectResult>(result.Result);
        var response = Assert.IsType<AuthResponseDto>(okResult.Value);
        Assert.True(response.Success);
        Assert.Equal("Kayıt başarılı.", response.Message);
        Assert.NotNull(response.User);
        Assert.Equal("newuser", response.User.Username);
        Assert.Equal("newuser@example.com", response.User.Email);
    }

    [Fact]
    public async Task Register_WithExistingEmail_ReturnsBadRequest()
    {
        // Arrange
        var context = TestDbContextHelper.CreateInMemoryDbContextWithData();
        var controller = new AuthController(context, _mockLogger.Object);
        var registerDto = new RegisterDto
        {
            Username = "differentuser",
            Email = "test@example.com", // Mevcut email
            Password = "Test123!"
        };

        // Act
        var result = await controller.Register(registerDto);

        // Assert
        var badRequestResult = Assert.IsType<BadRequestObjectResult>(result.Result);
        var response = Assert.IsType<AuthResponseDto>(badRequestResult.Value);
        Assert.False(response.Success);
        Assert.Equal("Bu email zaten kullanılıyor.", response.Message);
    }

    [Fact]
    public async Task Register_WithExistingUsername_ReturnsBadRequest()
    {
        // Arrange
        var context = TestDbContextHelper.CreateInMemoryDbContextWithData();
        var controller = new AuthController(context, _mockLogger.Object);
        var registerDto = new RegisterDto
        {
            Username = "testuser", // Mevcut username
            Email = "different@example.com",
            Password = "Test123!"
        };

        // Act
        var result = await controller.Register(registerDto);

        // Assert
        var badRequestResult = Assert.IsType<BadRequestObjectResult>(result.Result);
        var response = Assert.IsType<AuthResponseDto>(badRequestResult.Value);
        Assert.False(response.Success);
        Assert.Equal("Bu kullanıcı adı zaten kullanılıyor.", response.Message);
    }

    [Fact]
    public async Task Login_WithValidCredentials_ReturnsSuccess()
    {
        // Arrange
        var context = TestDbContextHelper.CreateInMemoryDbContextWithData();
        var controller = new AuthController(context, _mockLogger.Object);
        var loginDto = new LoginDto
        {
            Email = "test@example.com",
            Password = "Test123!"
        };

        // Act
        var result = await controller.Login(loginDto);

        // Assert
        var okResult = Assert.IsType<OkObjectResult>(result.Result);
        var response = Assert.IsType<AuthResponseDto>(okResult.Value);
        Assert.True(response.Success);
        Assert.Equal("Giriş başarılı.", response.Message);
        Assert.NotNull(response.Token);
        Assert.NotNull(response.User);
        Assert.Equal("testuser", response.User.Username);
        Assert.Equal("test@example.com", response.User.Email);
    }

    [Fact]
    public async Task Login_WithInvalidEmail_ReturnsUnauthorized()
    {
        // Arrange
        var context = TestDbContextHelper.CreateInMemoryDbContextWithData();
        var controller = new AuthController(context, _mockLogger.Object);
        var loginDto = new LoginDto
        {
            Email = "nonexistent@example.com",
            Password = "Test123!"
        };

        // Act
        var result = await controller.Login(loginDto);

        // Assert
        var unauthorizedResult = Assert.IsType<UnauthorizedObjectResult>(result.Result);
        var response = Assert.IsType<AuthResponseDto>(unauthorizedResult.Value);
        Assert.False(response.Success);
        Assert.Equal("Email veya şifre hatalı.", response.Message);
    }

    [Fact]
    public async Task Login_WithInvalidPassword_ReturnsUnauthorized()
    {
        // Arrange
        var context = TestDbContextHelper.CreateInMemoryDbContextWithData();
        var controller = new AuthController(context, _mockLogger.Object);
        var loginDto = new LoginDto
        {
            Email = "test@example.com",
            Password = "WrongPassword123!"
        };

        // Act
        var result = await controller.Login(loginDto);

        // Assert
        var unauthorizedResult = Assert.IsType<UnauthorizedObjectResult>(result.Result);
        var response = Assert.IsType<AuthResponseDto>(unauthorizedResult.Value);
        Assert.False(response.Success);
        Assert.Equal("Email veya şifre hatalı.", response.Message);
    }

    [Fact]
    public async Task Register_CreatesUserInDatabase()
    {
        // Arrange
        var context = TestDbContextHelper.CreateInMemoryDbContext();
        var controller = new AuthController(context, _mockLogger.Object);
        var registerDto = new RegisterDto
        {
            Username = "dbuser",
            Email = "dbuser@example.com",
            Password = "Test123!"
        };

        // Act
        await controller.Register(registerDto);

        // Assert
        var user = await context.Users.FirstOrDefaultAsync(u => u.Email == "dbuser@example.com");
        Assert.NotNull(user);
        Assert.Equal("dbuser", user.Username);
        Assert.True(BCrypt.Net.BCrypt.Verify("Test123!", user.PasswordHash));
    }
}

