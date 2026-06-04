public class VirtualThreadsDemo {

    public static void main(String[] args)
            throws Exception {

        long start =
                System.currentTimeMillis();

        for (int i = 1; i <= 100000; i++) {

            int taskId = i;

            Thread.startVirtualThread(() -> {
                System.out.println(
                        "Virtual Thread: " + taskId);
            });
        }

        Thread.sleep(5000);

        long end =
                System.currentTimeMillis();

        System.out.println(
                "Time Taken: "
                        + (end - start) + " ms");
    }
}