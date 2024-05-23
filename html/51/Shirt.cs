using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_Assesment
{
    internal class Shirt
    {
        public string ShirtColor { get; set; }
        public string ShirtPattern { get; set; }

        public Shirt(string shirtColor, string shirtPattern)
        {
            ShirtColor = shirtColor;
            ShirtPattern = shirtPattern;
        }

        public override string? ToString()
        {
            return $"This is a {ShirtColor} {ShirtPattern} shirt";
        }
    }
}
