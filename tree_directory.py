class directory:
    def __init__(self,name):
        self.name=name
        self.parent=None
        self.next_sibiling=None
        self.prev_sibiling=None
        self.first_child=None
        self.children=[]
    def add_dir(self,_dir):
        self.children.append(_dir)
        _dir.parent=self
        if self.first_child is None:
            self.first_child=_dir
        else:
            current_child=self.first_child
            while current_child.next_sibiling is not None:
                current_child=current_child.next_sibiling
            current_child.next_sibiling=_dir
            _dir.prev_sibiling=current_child
    def add_file(self,file):
        self.children.append(file)
        file.parent=self
        if self.first_child is None:
            self.first_child=file
        else:
            current_child=self.first_child
            while current_child.next_sibiling is not None:
                current_child=current_child.next_sibiling
            current_child.next_sibiling=file
            file.prev_sibiling=current_child
    
    def display(self,indent=0):
        current_child=self.first_child
        print(" " * indent + self.name +'/')
        for child in self.children:
            if isinstance(child,directory):
                child.display(indent+5)
            else:
                print(" " *(indent+5) + child.name + '/')
                
    
class File:
     def __init__(self,name):
            self.name=name
            self.parent=None
            self.next_sibiling=None
            self.prev_sibiling=None






#DESCRIPTION
            """ THE directory tree structure is implemented using n-ary tree and doubly linked list.
Each node is linked to its parent, previous sibiling and next sibiling.
A node can be a file or directory. if it is directory it will have children linked to one another.

"""






#test cases
#creating directories having attributes like add_dir, add_file,display,parent,first_child
            
root=directory("ROOT")
desktop=directory("DESKTOP")
video=directory("VIDEOS")
document=directory("DOCUMENTS")
picture=directory("PICTURE")
music=directory("COOL-MUSICS")
favorite=directory("FAVIOURITE MUSIC")

dsa_doc=directory("DSA_DOCUMENTS_COLLECTION")
database=directory("DATABASE RESOURCES")
memory=directory("BEAUTIFUL MEMORIES")
romance=directory("Romantic life")
spritual=directory("SPRITUAL BOOK COLLECTION")
waltz=directory("WALTZ MUSIC COLLECTION")


#linking the directories with the main or root directory and with each other

root.add_dir(desktop)
root.add_dir(video)
root.add_dir(document)
root.add_dir(picture)
root.add_dir(music)


# adding directroies to the sub directories of the root
document.add_dir(dsa_doc)
document.add_dir(database)
picture.add_dir(memory)
video.add_dir(romance)
document.add_dir(spritual)
music.add_dir(waltz)

#creating files
music1=File("AYDA_ABREHAM.mp3")
pic1=File("hiking.jpg")
video1=File("java full course.mp4")
doc1=File("Data structure and algorithm book.pdf")
doc2=File("Introduction to ethical hacking.pdf")


# adding the files to directories
desktop.add_file(music1)
document.add_file(doc2)
dsa_doc.add_file(doc1)
video.add_file(video1)
picture.add_file(pic1)



print(root.display())
