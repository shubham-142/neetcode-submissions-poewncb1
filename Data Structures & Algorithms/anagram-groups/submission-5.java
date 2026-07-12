class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        List<List<String>> res = new ArrayList<>();
        Map<String, List<String>> map = new HashMap<>();
        for(String str: strs){
            int[] freq = new int[26];
            for(int i=0; i<str.length(); i++){
                freq[str.charAt(i)-'a']++;
            }
            StringBuilder keyBuilder = new StringBuilder();
            for(int i: freq){
                keyBuilder.append('#').append(i);
            }
            
            String key = keyBuilder.toString();
            System.out.println(key);
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
