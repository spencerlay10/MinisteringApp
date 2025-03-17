using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MinisteringApp.Data;
using System.Threading.Tasks;
using BCrypt.Net;

namespace MinisteringApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly MinisteringDatabaseContext _context;

        public AuthController(MinisteringDatabaseContext context)
        {
            _context = context;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            // Retrieve the user based on the provided username
            var user = await _context.Users
                .FirstOrDefaultAsync(u => u.Username == request.Username);

            if (user == null || !VerifyPassword(request.Password, user.HashedPassword))
            {
                return Unauthorized("Invalid username or password.");
            }

            // You can return a JWT token or just the user's role (depending on your authentication mechanism)
            var response = new LoginResponse
            {
                Role = user.Role
            };

            return Ok(response);
        }

        // Method to verify hashed password (using BCrypt in this example)
        private bool VerifyPassword(string enteredPassword, string storedHash)
        {
            return BCrypt.Net.BCrypt.Verify(enteredPassword, storedHash);
        }
    }

    public class LoginRequest
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }

    public class LoginResponse
    {
        public string Role { get; set; }
    }
}
