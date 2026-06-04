public class PatternMatchingSwitch {

    public static void identifyType(Object obj) {
        String result = switch (obj) {
            case Integer i -> "Integer value: " + i;
            case String s -> "String value: " + s;
            case Double d -> "Double value: " + d;
            case Float f -> "Float value: " + f;
            case Long l -> "Long value: " + l;
            case null -> "Object is null";
            default -> "Unknown type: " + obj.getClass().getSimpleName();
        };

        System.out.println(result);
    }

    public static void main(String[] args) {
        identifyType(100);
        identifyType("Hello Java");
        identifyType(45.67);
        identifyType(12.5f);
        identifyType(true);
    }
}