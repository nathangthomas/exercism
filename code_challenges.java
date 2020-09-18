// Fizz Buzz
public class Main {
  static void fizzBuzz() {
    int n = 100;
    for (int i=1; i<n; i++) {
      if (i%15==0){
        System.out.println("FizzBuzz"+" ");
      } else if (i%5==0){
        System.out.println("Buzz"+" ");
      } else if (i%3==0){
        System.out.println("Fizz"+" ");
      } else {
        System.out.println(i);
      }
    }
  }

  public static void main(String[] args) {
    fizzBuzz();
  }
}

// PLUNGE CUT METHOD HINGE CALCULATOR

public class Main {
  public static double hingeWidth(double dbh){
    double hw = dbh*0.10;
    return hw;
  }
  public static double hingeLength(double dbh){
      double hl = dbh*0.80;
      return hl;
  }

  public static String calculate(double dbh) {
    return(String.format("Hinge Width: %s inches \nHinge Length: %s inches", hingeWidth(dbh), hingeLength(dbh)));
  }
    public static void main(String[] args) {
    calculate(22f);
    System.out.println(calculate(22f));
  }
}
