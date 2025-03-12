using System;
using System.Collections.Generic;

namespace MinisteringApp.Data;

public partial class Companion
{
    public int Id { get; set; }

    public int MinisterRecordNumber { get; set; }

    public int CompanionMembershipRecordNumber { get; set; }

    public string BeginDate { get; set; } = null!;

    public string? EndDate { get; set; }

    public virtual Member CompanionMembershipRecordNumberNavigation { get; set; } = null!;

    public virtual Member MinisterRecordNumberNavigation { get; set; } = null!;
}
