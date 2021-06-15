using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Employee
    {
        public int MRN { get; set; }
        public string PatientName { get; set; }
        public string Gender { get; set; }
        public string Race { get; set; }
        public string DateOfBirth { get; set; }
        public string PhotoFileName { get; set; }

    }
}