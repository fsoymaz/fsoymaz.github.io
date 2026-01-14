using Microsoft.EntityFrameworkCore;
using Backend.Data;
using Backend.Models;

namespace Backend.Tests.Helpers;

public static class TestDbContextHelper
{
    public static ApplicationDbContext CreateInMemoryDbContext()
    {
        var options = new DbContextOptionsBuilder<ApplicationDbContext>()
            .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString())
            .Options;

        return new ApplicationDbContext(options);
    }

    public static ApplicationDbContext CreateInMemoryDbContextWithData()
    {
        var context = CreateInMemoryDbContext();
        
        // Test verileri ekle
        context.Users.AddRange(
            new User
            {
                Id = 1,
                Username = "testuser",
                Email = "test@example.com",
                PasswordHash = BCrypt.Net.BCrypt.HashPassword("Test123!"),
                CreatedAt = DateTime.UtcNow
            },
            new User
            {
                Id = 2,
                Username = "existinguser",
                Email = "existing@example.com",
                PasswordHash = BCrypt.Net.BCrypt.HashPassword("Password123!"),
                CreatedAt = DateTime.UtcNow
            }
        );
        
        context.SaveChanges();
        return context;
    }
}

