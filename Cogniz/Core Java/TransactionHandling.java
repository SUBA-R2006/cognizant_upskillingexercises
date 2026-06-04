import java.sql.*;

public class BankTransaction {

    private static final String URL =
            "jdbc:mysql://localhost:3306/college";
    private static final String USER = "root";
    private static final String PASSWORD = "root";

    public static void transfer(int fromId,
                                int toId,
                                double amount) {

        try (Connection con =
                     DriverManager.getConnection(URL, USER, PASSWORD)) {

            con.setAutoCommit(false);

            try {

                PreparedStatement debit =
                        con.prepareStatement(
                                "UPDATE accounts SET balance = balance - ? WHERE account_id=?");

                debit.setDouble(1, amount);
                debit.setInt(2, fromId);
                debit.executeUpdate();

                PreparedStatement credit =
                        con.prepareStatement(
                                "UPDATE accounts SET balance = balance + ? WHERE account_id=?");

                credit.setDouble(1, amount);
                credit.setInt(2, toId);
                credit.executeUpdate();

                con.commit();
                System.out.println("Transaction Successful");

            } catch (Exception e) {

                con.rollback();
                System.out.println("Transaction Rolled Back");
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        transfer(1, 2, 1000);
    }
}