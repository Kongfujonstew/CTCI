import java.util.*;

public class JonsStack {
  // int[] container;

  // public void push(String value) {
  //   container.push(value);
  // } 

  void sortStack(Stack<Integer> s) {
    Stack<Integer> r = new Stack<Integer>();
    while (!s.isEmpty()) {
      int tmp = s.pop();
      while(!r.isEmpty() && r.peek() > tmp) {
        s.push(r.pop());
      }
      r.push(tmp);
    }

    while (!r.isEmpty()) {
      s.push(r.pop());
    }
  }

  public static void main(String args[]) {
    // Stack testStack = new Stack();
    // testStack.push(1);
  }

}


// function sortStack = (stack) => {
//   var r = new Stack();
//   while (!stack.isEmpty()) {
//     var tmp = stack.pop();
//     while (!r.isEmpty() && r.peek > tmp) {
//       stack.push(r.pop());
//     }
//     r.push(tmp);
//   }
//   while (!r.isEmpty()) {
//     stack.push(r.pop());
//   }
// }
