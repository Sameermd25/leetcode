class Solution:
    def isValid(self, s: str) -> bool:
        stack=[]
        for i in range(len(s)):
            if s[i]=="(" or s[i]=="[" or s[i]=="{":
                stack.append(s[i])
            else:
                if len(stack)==0:
                    return False
                last=stack[len(stack)-1]
                stack.pop()
                last+=s[i]
                if(last=="{}" or last=="()" or last=="[]"):
                    continue
                else:
                    return False

        if len(stack)>0:
            return False
        else:
            return True
        