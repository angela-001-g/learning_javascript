// Primera parte 

public class ejercicio {
    static int suma(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {
        int z = suma(10, 20, 30);
        System.out.println(z);
    }
}

// Otra manera hacerlo 1

/*
 * public class ejercicio {
 * static int suma(int a, int b, int c) {
 * return a + b + c;
 * }
 * 
 * public static void main(String[] args) {
 * System.out.println(10 + 20 + 30);
 * }
 */

// Otra manera de hacerlo 2
/*
 * public class ejercicio {
 * static void sumatres(int a, int b, int c) {
 * System.out.println(a + b + c);
 * }
 * public static void main(String[] args) {
 * suma(10, 15, 8);
 * suma(15, 40, 60);
 * }
 * }
 */

// Preguntas: ¿Por qué el segundo main no me deja ponerlo como ejercicio, qué es
// eso?
