import java.util.concurrent.*;
import java.util.*;

public class CallableDemo {

    public static void main(String[] args)
            throws Exception {

        ExecutorService executor =
                Executors.newFixedThreadPool(3);

        List<Callable<Integer>> tasks =
                List.of(
                        () -> 10 + 20,
                        () -> 30 + 40,
                        () -> 50 + 60
                );

        List<Future<Integer>> futures =
                new ArrayList<>();

        for (Callable<Integer> task : tasks) {
            futures.add(
                    executor.submit(task));
        }

        for (Future<Integer> future : futures) {
            System.out.println(
                    "Result: "
                            + future.get());
        }

        executor.shutdown();
    }
}