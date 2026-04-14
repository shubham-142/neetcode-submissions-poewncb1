class Solution {
    public boolean isAnagram(String s, String t) {
        if(s.length() != t.length()) return false;
        HashMap<Character, Integer> maps = new HashMap<>();
        HashMap<Character, Integer> mapt = new HashMap<>();
        for(int i=0; i<s.length(); i++){
            char c =  s.charAt(i);
            maps.put(c, maps.getOrDefault(c,0)+1);
            char d = t.charAt(i);
            mapt.put(d,mapt.getOrDefault(d,0)+1);
        }
        for(Map.Entry<Character, Integer> entry: maps.entrySet()){
            char key = entry.getKey();
            if(!maps.get(key).equals(mapt.get(key))) return false;
        }
        return true;
    }
}
