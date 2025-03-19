using System;
using System.Collections.Generic;

namespace MinisteringApp.Data;

public partial class Report
{
    public int ReportId { get; set; }

    public int PlanId { get; set; }

    public string DateCompleted { get; set; } = null!;

    public string? Notes { get; set; }

    public int SendToLeaders { get; set; }

    public int MinisterRecordNumber { get; set; }

    public virtual Plan Plan { get; set; } = null!;
}
