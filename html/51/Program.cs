using System.Drawing;

namespace C_Assesment
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string[] patterns = new string[] { "striped", "plaid", "plain" };
            string[] colors = new string[] {"Black", "Red", "Green", "Blue"};
            for (int i = 0; i < colors.Length; i++)
            {
                for (int j = 0; j < patterns.Length; j++)
                {
                    var shirt = new Shirt(colors[i], patterns[j]);
                    Console.WriteLine(shirt);
                }
            }
        }
    }
}