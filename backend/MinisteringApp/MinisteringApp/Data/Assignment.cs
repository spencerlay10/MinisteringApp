using System;
using System.Collections.Generic;

namespace MinisteringApp.Data;

public partial class Assignment
{
    public int AssignmentId { get; set; }

    public int MinisterRecordNumberId { get; set; }

    public int RecipientMembershipRecordNumber { get; set; }

    public string BeginDate { get; set; } = null!;

    public string? EndDate { get; set; }

    public virtual Member MinisterRecordNumber { get; set; } = null!;

    public virtual Member RecipientMembershipRecordNumberNavigation { get; set; } = null!;
    
    public virtual Plan? Plan { get; set; }
    public virtual Member? Companion { get; set; }

    
    
}
