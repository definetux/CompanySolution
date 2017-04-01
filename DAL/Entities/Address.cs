using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Entities
{
    public class Address : IEntity
    {
        public long Id { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public string Zip { get; set; }
        public string Street { get; set; }
        public string House { get; set; }
    }
}
