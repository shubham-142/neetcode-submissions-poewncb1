class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        List<List<String>> res = new ArrayList<>();
        Map<String, List<String>> map = new HashMap<>();
        for(String str: strs){
            int[] freq = new int[26];
            for(char c: str.toCharArray()) freq[c-'a']++;
            String key = Arrays.toString(freq);
            if(map.containsKey(key)){
                map.get(key).add(str);

            }else{
                List<String> l1 = new ArrayList<>();
                l1.add(str);
                map.put(key,l1);
            }
        }
        return new ArrayList<>(map.values());
    }
}
