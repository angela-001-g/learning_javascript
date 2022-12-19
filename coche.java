
// Segunda parte

public class coche {
    static int indoors = 0;

    static int incremento(int a) {
        return indoors = indoors + a;
    }

    public static void main(String[] args) {
        coche miCoche = new coche();
        miCoche.incremento(1);
        System.out.print(miCoche.indoors);

    }

}
