import java.util.*;
class Practice07 {
    public static void main(String args[]) {
        System.out.println("入力開始");
        Scanner scanner = new Scanner(System.in);
        // 要素数の入力
        System.out.println("配列のサイズを入力してください");
        int size = scanner.nextInt();

        ArrayList<Integer> numList = new ArrayList<Integer>();
        // 要素数分入力
        for (int i = 0; i < size; i++) {
            System.out.println(i + 1 + "番目の入力");
            numList.add(scanner.nextInt());
        }

        // 探す値
        System.out.println("検索する数値を入力してください。");
        int searchNum = scanner.nextInt();

        // 番兵法開始
        numList.add(searchNum);
        System.out.println("要素数 : " + size);
        int resultIndex = 0;
        int counter = 0;
        for (int num : numList) {
            System.out.println("x[" + counter + "] : " + num);

            if(num == searchNum) {
                resultIndex = counter;
            }
            counter++;
        }
        System.out.println("探す値 : " + searchNum);
        if (hasSearchNum) {
            System.out.println("その値はx[" + resultIndex + "]にあります。");
        } else {
            System.out.println("その値は存在しません。");
        }
    }
}