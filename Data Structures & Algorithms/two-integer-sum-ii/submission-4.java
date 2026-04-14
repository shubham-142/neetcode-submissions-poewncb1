class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int l = 0;
        int r = numbers.length-1;
        int sum = numbers[l]+numbers[r];
        while(sum !=target){
            if(sum>target){
                r = r-1;
            }else{
                l = l+1;
            }
            sum = numbers[l]+numbers[r];
            System.out.println(sum);
        }
        return new int[]{l+1,r+1};

        
    }
}
