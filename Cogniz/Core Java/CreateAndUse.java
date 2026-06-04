Utility.java

module com.utils {
    exports com.utils;
}

  Utility.java 

package com.utils;

public class Utility {

    public static String getMessage() {
        return "Welcome to Java Modules";
    }
}


com.greetings/module-info.java

module com.greetings {
    requires com.utils;
}



//main.java

package com.greetings;

import com.utils.Utility;

public class Main {

    public static void main(String[] args) {
        System.out.println(Utility.getMessage());
    }
}