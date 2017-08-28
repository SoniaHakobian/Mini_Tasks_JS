#include <iostream>
using namespace std;
template <typename T>
class SmartPointer
{
   private:
        T* resource;
   public:
        SmartPointer(T* p)
     {
        cout<<"Hey ! I'm Constructor"<<endl;
        resource=p;
     }
        ~SmartPointer()
     {
        cout<<"I'm Destructor, bye! "<<endl;
        delete resource;
     }
        T& operator*()
     {
        return *resource;
     }
        T* operator->()
     {
       return resource;
     }
};

int main()
{
      SmartPointer<int>ob(new int());
        return 0;
}
