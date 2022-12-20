public class ejer9 {
    public static void main(String[] args) {
        Cliente cliente = new Cliente(21, "Angela", "1234", 0.4);
        System.out.println("Hola " + cliente.nombre + " tienes " + cliente.edad + " años, tu numero es "
                + cliente.telefono + " y tienes un credito de " + cliente.credito);

        Trabajador trabajador = new Trabajador(33, "Daniel", "5678", 1300000);
        System.out.println("Hola " + trabajador.nombre + " tienes " + trabajador.edad + " años, tu numero es "
                + trabajador.telefono + " y el salario disponible es " + trabajador.salario);
    }
}

class Persona {
    int edad;
    String nombre;
    String telefono;
}

class Cliente extends Persona {
    double credito;

    public Cliente(int edad, String nombre, String telefono, double credito) {
        this.edad = edad;
        this.nombre = nombre;
        this.credito = credito;
        this.telefono = telefono;
    }

}

class Trabajador extends Persona {
    double salario;

    public Trabajador(int edad, String nombre, String telefono, double salario) {
        this.edad = edad;
        this.nombre = nombre;
        this.telefono = telefono;
        this.salario = salario;
    }
}
