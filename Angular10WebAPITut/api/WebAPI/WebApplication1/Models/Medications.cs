using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Medications
    {
        public int MRN { get; set; }
        public string code { get; set; }

        public int description { get; set; }
        public string startDate { get; set; }
    }
}