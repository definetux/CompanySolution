using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Entities
{
    public class User : IEntity
    {
        public long Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public Address Address { get; set; }
        public Position Position { get; set; }
    }
}
