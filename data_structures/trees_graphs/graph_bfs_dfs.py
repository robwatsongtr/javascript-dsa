# Full Graph class, WITH BFS AND DFS for an undirected two way graph. 

class Graph:
    def __init__(self):
        # keeps track of the connections between nodes in a dictionary
        self.adjacency_list = {}

    def add_node(self, value):
        if value not in self.adjacency_list:
            self.adjacency_list[value] = []

    def add_edge(self, node_1, node_2):
        if node_1 not in self.adjacency_list:
            self.add_node(node_1)
        if node_2 not in self.adjacency_list:
            self.add_node(node_2)

        self.adjacency_list[node_1].append(node_2)
        self.adjacency_list[node_2].append(node_1)

    # filter out node_2 from adj list of node_1 and vice versa. 
    def remove_edge(self, node_1, node_2):
        self.adjacency_list[node_1] = [v for v in self.adjacency_list[node_1] if v != node_2]
        self.adjacency_list[node_2] = [v for v in self.adjacency_list[node_2] if v != node_1]

    def remove_node(self, node):
        if node not in self.adjacency_list:
            return

        while len(self.adjacency_list[node]) > 0:
            adjacent_node = self.adjacency_list[node].pop()
            self.remove_edge(node, adjacent_node)

        del self.adjacency_list[node] 

    def depth_first_search(self, start_node):
        result = []
        visited = {}

        def dfs(node): 
            # base case 
            if not node:
                return None 
            
            visited[node] = True  # mark vertex as visited 
            result.append(node)  # push node into result array
            
            # check to make sure node exists in adj list first as guard clause
            if node in self.adjacency_list: 
                # loop through and visit neighbors recursively 
                for neighbor in adjacency_list[node]:
                    if neighbor not in visited: 
                        dfs(neighbor)

        dfs(start_node) # kick off the recursion 

        return result 

    def breadth_first_search(self, start_node):
        queue = []
        result = []
        visitied = {}

        # push starting node on to queue and mark as visited 
        queue.append(start_node)
        visited[start_node] = True 

        while len(queue) > 0:
            # dequeue front and push into result array
            current = queue.pop(0)
            reuslt.append(current)

            # check neighbors of the current node 
            if current in self.adjacency_list: # check if node has neighbors 
                for neighbor in self.adjacency_list[current]:
                    if neighbor not in visited:
                        visited[neighbor] = True
                        queue.append(neighbor)

        return result 

     
if __name__ == '__main__':
    g = Graph()

    g.add_node("New York")
    g.add_node("Madrid")
    g.add_node("Berlin")
    g.add_node("Dehli")
    g.add_node("Stockholm")
    g.add_node("Prague")

    g.add_edge("New York", "Madrid")
    g.add_edge("New York", "Berlin")
    g.add_edge("New York", "Dehli")
    g.add_edge("Dehli", "Madrid")
    g.add_edge("Madrid", "Berlin")
    g.add_edge("Berlin", "Stockholm")
    g.add_edge("Dehli", "Prague")

    print(g.adjacency_list)

    # g.remove_node("Delhi")

    # print()
    # print("Removed Delhi")
    # print(g.adjacency_list)

    print()
    print("Depth first")
    print(g.depth_first_search("Madrid"))

    print("Breadth first")
    print(g.breadth_first_search("Madrid"))


        
