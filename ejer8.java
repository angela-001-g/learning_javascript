public class ejer8 {

    public static void main(String[] args) {
        Persona persona = new Persona();
        persona.setEdad(21);
        persona.setNombre("Angela");
        persona.setTelefono("3183457299");
        System.out.println("Tu edad es " + persona.getEdad());
        System.out.println("Tu nombre es " + persona.getNombre());
        System.out.println("Tu numero es " + persona.getTelefono());
    }
}

class Persona {
    private int edad;
    private String nombre;
    private String telefono;

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public int getEdad() {
        return this.edad;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getNombre() {
        return this.nombre;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getTelefono() {
        return this.telefono;
    }

}