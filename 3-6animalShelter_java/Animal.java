import java.util.*;


abstract class Animal {
  private int order;
  protected String name;
  public Animal(String n) { name = n; }
  public void setOrder(int ord) { order = ord; }
  public int getOrder() { return order; }

  public boolean isOlderThan(Animal a) {
    return this.order < a.getOrder();
  }

  public static void main(String args[]) {
    // Stack testStack = new Stack();
    // testStack.push(1);
  }

}

class AnimalQueue {
  LinkedList<Dog> dogs = new LinkedList<Dog>();
  LinkedList<Cat> cats = new LinkedList<Cat>();
  private int order = 0;

  public void enqueue(Animal a) {
    a.setOrder(order);
    order++;

    if (a instanceof Dog) dogs.addLast((Dog) a);
    else if (a instanceof Cat) cats.addLast((Cat) a);
  }

  public Animal dequeueAny() {
    if (dogs.size() == 0) {
      return dequeueCats();
    } else if (cats.size() == 0) {
      return dequeueDogs();
    }

    Dog dog = dogs.peek();
    Cat cat = cats.peek();
    if (dog.isOlderThan(cat)) {
      return dequeueDogs();
    } else {
      return dequeueCats();
    }
  }

  public Dog dequeueDogs() {
    return dogs.poll();
  }

  public Cat dequeueCats() {
    return cats.poll();
  }

}





// var Animal = () => {
//   this.order = null;
//   this.name = null;
//   this.giveName(string) => { this.name = n; };
//   this.setOrder = (ord) => { this.order = ord;};
//   this.getOrder = () => { return this.order; };

//   this.isOlderThan(animal) {
//     return order < animal.getOrder();
//   }
// }