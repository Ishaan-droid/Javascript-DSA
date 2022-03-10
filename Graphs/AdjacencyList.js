class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    let v2Idx = this.adjacencyList[vertex1].indexOf(vertex2);
    this.adjacencyList[vertex1].splice(v2Idx, 1);
    let v1Idx = this.adjacencyList[vertex2].indexOf(vertex1);
    this.adjacencyList[vertex2].splice(v1Idx, 1);
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacencyVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacencyVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);

console.log(graph);
