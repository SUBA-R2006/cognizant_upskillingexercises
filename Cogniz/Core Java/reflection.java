public class Greeting {

    public void sayHello() {
        System.out.println("Hello from Reflection");
    }
}

//reflectionProgram

import java.lang.reflect.*;

public class ReflectionDemo {

    public static void main(String[] args)
            throws Exception {

        Class<?> clazz =
                Class.forName("Greeting");

        Object obj =
                clazz.getDeclaredConstructor()
                        .newInstance();

        Method[] methods =
                clazz.getDeclaredMethods();

        for (Method method : methods) {

            System.out.println(
                    "Method: " + method.getName());

            for (Parameter p :
                    method.getParameters()) {

                System.out.println(
                        "Parameter: "
                                + p.getName());
            }
        }

        Method m =
                clazz.getMethod("sayHello");

        m.invoke(obj);
    }
}