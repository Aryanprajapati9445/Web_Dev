import 'dart:io';

void main() {
  // int a;
  // print(a);
  // final t = DateTime.now();
  // final t2 = DateTime.now();
  // print(t);
  // print(t2);
  // const a = "cvrkf";
  // print(a);
  var input = stdin.readLineSync();
  var s = stdin.readLineSync.toString();
}

class Student {
  int? id;
  String name;
  void display() {
    print("ID: $id, Name: $name");
  }
}
