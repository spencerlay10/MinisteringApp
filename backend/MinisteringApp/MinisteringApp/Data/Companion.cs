using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MinisteringApp.Data;

public partial class Companion
{
    [Key]
    public int Id { get; set; }

    public string MinisterRecordNumber { get; set; }

    public string CompanionMembershipRecordNumber { get; set; }

    public string BeginDate { get; set; } = null!;

    public string? EndDate { get; set; }

    public virtual Member CompanionMembershipRecordNumberNavigation { get; set; } = null!;

    public virtual Member MinisterRecordNumberNavigation { get; set; } = null!;
}
