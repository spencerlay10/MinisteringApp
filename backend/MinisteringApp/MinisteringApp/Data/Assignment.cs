using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MinisteringApp.Data;

public partial class Assignment
{
    [Key]
    public int AssignmentId { get; set; }

    public string MinisterRecordNumberId { get; set; }

    public string RecipientMembershipRecordNumber { get; set; }

    public string BeginDate { get; set; } = null!;

    public string? EndDate { get; set; }

    public virtual Member MinisterRecordNumber { get; set; } = null!;

    public virtual Member RecipientMembershipRecordNumberNavigation { get; set; } = null!;
}
