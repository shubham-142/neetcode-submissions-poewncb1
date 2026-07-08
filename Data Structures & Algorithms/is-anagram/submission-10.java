class Solution {
    public boolean isAnagram(String s, String t) {
        if(s.length() != t.length()) return false;
        Map<Character, Integer> maps = new HashMap<>();
        Map<Character, Integer> mapt = new HashMap<>();
        for(int i = 0; i<s.length(); i++){
            maps.put(s.charAt(i), maps.getOrDefault(s.charAt(i),0)+1);
            mapt.put(t.charAt(i), mapt.getOrDefault(t.charAt(i),0)+1);
        }
        for(Map.Entry<Character, Integer> entry: maps.entrySet()){
            char key = entry.getKey();
            if(!maps.get(key).equals(mapt.get(key))) return false;
        }
    return true;
    }
}
