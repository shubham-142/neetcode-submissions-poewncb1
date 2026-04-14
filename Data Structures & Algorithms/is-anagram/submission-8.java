class Solution {
    public boolean isAnagram(String s, String t) {
        if(s.length() != t.length()) return false;
        HashMap<Character, Integer> maps = new HashMap<>();
        for(int i=0; i<s.length(); i++){
            char c =  s.charAt(i);
            maps.put(c, maps.getOrDefault(c,0)+1);
        }
        for(int i = 0; i<t.length(); i++){
            char key = t.charAt(i);
            if(!maps.containsKey(key)) return false;
            maps.put(key,maps.get(key)-1);
            if (maps.get(key)==0){
                maps.remove(key);
            }
        }
        return maps.isEmpty();
    }
}
