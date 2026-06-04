 //student.java 
public class Student {
    private int id;
    private String name;
    private int age;

    public Student(int id, String name, int age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    public int getId() { return id; }
    public String getName() { return name; }
    public int getAge() { return age; }
}
//studentDAO.java

import java.sql.*;

public class StudentDAO {

    private static final String URL =
            "jdbc:mysql://localhost:3306/college";
    private static final String USER = "root";
    private static final String PASSWORD = "root";

    public void insertStudent(Student student) {

        String sql =
                "INSERT INTO students(id, name, age) VALUES (?, ?, ?)";

        try (Connection con =
                     DriverManager.getConnection(URL, USER, PASSWORD);
             PreparedStatement ps =
                     con.prepareStatement(sql)) {

            ps.setInt(1, student.getId());
            ps.setString(2, student.getName());
            ps.setInt(3, student.getAge());

            ps.executeUpdate();
            System.out.println("Student inserted.");

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void updateStudentAge(int id, int newAge) {

        String sql =
                "UPDATE students SET age=? WHERE id=?";

        try (Connection con =
                     DriverManager.getConnection(URL, USER, PASSWORD);
             PreparedStatement ps =
                     con.prepareStatement(sql)) {

            ps.setInt(1, newAge);
            ps.setInt(2, id);

            int rows = ps.executeUpdate();

            System.out.println(rows + " row(s) updated.");

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}

//main.java

public class Main {
    public static void main(String[] args) {

        StudentDAO dao = new StudentDAO();

        dao.insertStudent(new Student(3, "Kumar", 22));

        dao.updateStudentAge(3, 23);
    }
}