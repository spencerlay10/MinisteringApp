using System;
using System.Collections.Generic;

namespace MinisteringApp.Data;

public partial class User
{
    public int UserId { get; set; }

    public int MembershipRecordNumber { get; set; }

    public string Username { get; set; } = null!;

    public string HashedPassword { get; set; } = null!;

    public string Role { get; set; } = null!;
}
