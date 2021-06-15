using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Reports
    {
        public int ReportId { get; set; }
        public string ReportType { get; set; }

        public string  ReportDate { get; set; }
        public string ReportFile { get; set; }
        public string Description { get; set; }
    }
}