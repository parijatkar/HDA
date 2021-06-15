using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Messages
    {
        public int MRN { get; set; }
        public string body { get; set; }

        public int type { get; set; }
        public string msgDate { get; set; }
    }
}