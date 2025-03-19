using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MinisteringApp.Data;

public partial class User
{
    [Key]
    public int UserId { get; set; }

    public string MembershipRecordNumber { get; set; }

    public string Username { get; set; } = null!;

    public string HashedPassword { get; set; } = null!;

    public string Role { get; set; } = null!;
}
