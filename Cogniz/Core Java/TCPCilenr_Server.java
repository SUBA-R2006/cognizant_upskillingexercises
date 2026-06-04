
//server
 import java.io.*;
import java.net.*;

public class ChatServer {

    public static void main(String[] args) throws Exception {

        ServerSocket serverSocket =
                new ServerSocket(5000);

        System.out.println("Server Started...");

        Socket socket = serverSocket.accept();

        BufferedReader in =
                new BufferedReader(
                        new InputStreamReader(socket.getInputStream()));

        PrintWriter out =
                new PrintWriter(socket.getOutputStream(), true);

        BufferedReader keyboard =
                new BufferedReader(
                        new InputStreamReader(System.in));

        while (true) {

            String clientMsg = in.readLine();
            System.out.println("Client: " + clientMsg);

            String reply = keyboard.readLine();
            out.println(reply);
        }
    }
}

//client

import java.io.*;
import java.net.*;

public class ChatClient {

    public static void main(String[] args) throws Exception {

        Socket socket =
                new Socket("localhost", 5000);

        BufferedReader in =
                new BufferedReader(
                        new InputStreamReader(socket.getInputStream()));

        PrintWriter out =
                new PrintWriter(socket.getOutputStream(), true);

        BufferedReader keyboard =
                new BufferedReader(
                        new InputStreamReader(System.in));

        while (true) {

            String msg = keyboard.readLine();
            out.println(msg);

            String serverReply = in.readLine();
            System.out.println("Server: " + serverReply);
        }
    }
}

