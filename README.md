# Text Editor - Data Structures Learning Project

## Project Overview

A browser-based text editor focused on implementing and visualizing fundamental data structures. The editor uses vim-inspired keybindings as a vehicle to demonstrate how different data structures solve real-world problems.

## Core Data Structures

- **Array** - Text buffer (document lines)
- **Stack** - Undo system (LIFO)
- **Queue** - Macro recording/playback (FIFO)
- **Linked List** - Cursor jump history (single direction)
- **Double Linked List** - Document version snapshots (bidirectional)

## Tech Stack

- Vanilla JavaScript (ES6+)
- HTML5/CSS3
- Testing: Jest (or your preferred testing framework)

---

## Development Phases & Task Breakdown

### Phase 1: Project Setup & Foundation

#### Task 1.1: Initialize Project

- [ ] Create project structure
  ```
  /src
    /data-structures
    /components
    /utils
  /tests
  /public
  index.html
  package.json
  README.md
  ```
- [ ] Setup package.json with test scripts
- [ ] Configure testing framework (Jest)
- [ ] Create basic HTML structure
- [ ] Setup CSS baseline
- **Tests:** N/A (setup only)

#### Task 1.2: Implement Array-Based Text Buffer

- [ ] Create `TextBuffer` class
  - `getLine(index)` - retrieve line at index
  - `insertLine(index, text)` - insert new line
  - `deleteLine(index)` - remove line
  - `modifyLine(index, text)` - update line content
  - `getAllLines()` - return all lines
  - `getLineCount()` - return number of lines

- **Tests Required:**
  - Insert line at beginning
  - Insert line at end
  - Insert line in middle
  - Delete line (all positions)
  - Modify existing line
  - Handle empty buffer
  - Handle invalid indices

#### Task 1.3: Basic Editor UI

- [ ] Create editor container with textarea/contenteditable
- [ ] Create visual display for array structure
- [ ] Render text from buffer to display
- [ ] Add manual test buttons (insert, delete, modify)

- **Tests Required:**
  - Buffer updates trigger display updates
  - Display shows correct line count
  - Display shows correct content

**Phase 1 Milestone:** Array buffer working with visual representation and full test coverage

---

### Phase 2: Stack Implementation (Undo System)

#### Task 2.1: Implement Stack Data Structure

- [ ] Create `Stack` class
  - `push(item)` - add to top
  - `pop()` - remove from top and return
  - `peek()` - view top without removing
  - `isEmpty()` - check if empty
  - `size()` - return count
  - `clear()` - empty the stack

- **Tests Required:**
  - Push adds items in LIFO order
  - Pop returns correct item
  - Pop on empty stack handles gracefully
  - Peek doesn't remove item
  - Size updates correctly
  - isEmpty works correctly

#### Task 2.2: Implement Command Pattern

- [ ] Create base `Command` class/interface
  - `execute()` method
  - `undo()` method

- [ ] Create `InsertLineCommand`
  - Store: index, line content
  - Execute: insert line in buffer
  - Undo: remove line from buffer

- [ ] Create `DeleteLineCommand`
  - Store: index, deleted content
  - Execute: remove line
  - Undo: restore line

- [ ] Create `ModifyLineCommand`
  - Store: index, old content, new content
  - Execute: update line
  - Undo: restore old content

- **Tests Required:**
  - Each command executes correctly
  - Each command undoes correctly
  - Commands work with TextBuffer
  - Commands handle edge cases

#### Task 2.3: Integrate Stack with Editor

- [ ] Create `UndoManager` class
  - Holds undo stack
  - `executeCommand(command)` - run and push to stack
  - `undo()` - pop and reverse command

- [ ] Connect editor actions to command creation
- [ ] Add "Undo" button/keyboard shortcut
- [ ] Create visual representation of stack
- [ ] Add animations for push/pop operations

- **Tests Required:**
  - Commands pushed to stack on execution
  - Undo pops correct command
  - Multiple undos work in sequence
  - Undo on empty stack is safe
  - Stack state updates correctly

**Phase 2 Milestone:** Full undo system working with stack visualization

---

### Phase 3: Linked List (Cursor History)

#### Task 3.1: Implement Linked List Data Structure

- [ ] Create `Node` class
  - Properties: data, next

- [ ] Create `LinkedList` class
  - `append(data)` - add to end
  - `getCurrent()` - get current node
  - `moveToPrevious()` - traverse backward (store previous)
  - `moveToNext()` - traverse forward
  - `toArray()` - convert to array for visualization
  - `size()` - return length

- **Tests Required:**
  - Append adds nodes correctly
  - Nodes link in correct order
  - Traversal works correctly
  - Empty list handles gracefully
  - toArray returns correct representation

#### Task 3.2: Implement Cursor History Tracking

- [ ] Create `CursorHistory` class
  - Uses LinkedList internally
  - `recordPosition(line, col, timestamp)` - add position
  - `jumpBack()` - move to previous position
  - `getCurrentPosition()` - get current cursor position

- [ ] Implement cursor position tracking in editor
- [ ] Add logic to detect "significant" cursor movements
  - After typing pause (debounce ~500ms)
  - After large jumps (click, navigation)
  - After undo operations

- **Tests Required:**
  - Positions recorded correctly
  - Jump back returns previous position
  - Debouncing works (don't record every keystroke)
  - Sequential positions maintain order

#### Task 3.3: Cursor History UI

- [ ] Create visual representation of linked list
- [ ] Show nodes with positions and arrows
- [ ] Highlight current position
- [ ] Add "Jump Back" button
- [ ] Animate cursor movement on jump

- **Tests Required:**
  - UI updates when history changes
  - Jump back moves cursor in editor
  - Visual correctly shows linked structure

**Phase 3 Milestone:** Cursor history working with linked list visualization

---

### Phase 4: Queue (Macro System)

#### Task 4.1: Implement Queue Data Structure

- [ ] Create `Queue` class
  - `enqueue(item)` - add to rear
  - `dequeue()` - remove from front and return
  - `peek()` - view front without removing
  - `isEmpty()` - check if empty
  - `size()` - return count
  - `clear()` - empty the queue
  - `toArray()` - for visualization

- **Tests Required:**
  - Enqueue adds items to rear
  - Dequeue removes items from front (FIFO)
  - FIFO order maintained
  - Dequeue on empty queue handles gracefully
  - Size and isEmpty work correctly

#### Task 4.2: Implement Macro System

- [ ] Create `MacroRecorder` class
  - Uses Queue internally
  - `startRecording()` - begin capture
  - `stopRecording()` - end capture
  - `recordCommand(command)` - add to queue
  - `playback(textBuffer)` - execute all commands in FIFO order
  - `isRecording()` - check state

- [ ] Integrate with command system

- **Tests Required:**
  - Recording captures commands in order
  - Playback executes FIFO
  - Playback applies commands to buffer correctly
  - Can't record during playback
  - Commands execute in exact recorded order

#### Task 4.3: Macro UI

- [ ] Add "Record Macro" button
- [ ] Add "Stop Recording" button
- [ ] Add "Play Macro" button
- [ ] Create visual queue representation
- [ ] Show front/rear of queue clearly
- [ ] Animate enqueue/dequeue operations
- [ ] Add recording indicator

- **Tests Required:**
  - UI buttons change recording state
  - Queue visualization updates
  - Playback animation shows dequeue

**Phase 4 Milestone:** Macro recording/playback working with queue visualization

---

### Phase 5: Double Linked List (Version Snapshots)

#### Task 5.1: Implement Double Linked List Data Structure

- [ ] Create `DoublyNode` class
  - Properties: data, prev, next

- [ ] Create `DoublyLinkedList` class
  - `append(data)` - add to end
  - `getCurrent()` - get current node
  - `moveToPrevious()` - traverse backward
  - `moveToNext()` - traverse forward
  - `hasPrevious()` - check if can go back
  - `hasNext()` - check if can go forward
  - `toArray()` - for visualization
  - `size()` - return length

- **Tests Required:**
  - Nodes link bidirectionally
  - Forward traversal works
  - Backward traversal works
  - Can navigate full list both ways
  - Edge cases (beginning/end) handled

#### Task 5.2: Implement Version Snapshot System

- [ ] Create `VersionManager` class
  - Uses DoublyLinkedList internally
  - `createSnapshot(buffer, timestamp)` - save current state
  - `restorePrevious()` - load previous version
  - `restoreNext()` - load next version
  - `getCurrentVersion()` - get current snapshot data
  - `canGoBack()` - check if previous exists
  - `canGoForward()` - check if next exists

- [ ] Implement auto-snapshot logic
  - After N commands (e.g., every 10 edits)
  - Manual save button

- [ ] Deep copy buffer for snapshots

- **Tests Required:**
  - Snapshots store complete buffer state
  - Restore previous loads correct content
  - Restore next works after going back
  - Can navigate full version history
  - Auto-snapshot triggers correctly
  - Buffer state matches restored snapshot

#### Task 5.3: Version History UI

- [ ] Create visual representation of double linked list
- [ ] Show prev/next arrows clearly
- [ ] Display version metadata (timestamp, line count)
- [ ] Add "Previous Version" button
- [ ] Add "Next Version" button
- [ ] Add "Save Snapshot" button
- [ ] Highlight current version
- [ ] Show preview of version content

- **Tests Required:**
  - UI updates when versions change
  - Navigation buttons enable/disable correctly
  - Buffer restores update editor display
  - Visual shows bidirectional structure

**Phase 5 Milestone:** Version history working with double linked list visualization

---

### Phase 6: Integration & Polish

#### Task 6.1: Connect All Systems

- [ ] Ensure undo doesn't break version history
- [ ] Cursor history updates on version restore
- [ ] Macros work with all other systems
- [ ] All data structures update UI correctly

- **Tests Required:**
  - Integration tests for combined operations
  - Undo after macro playback
  - Version restore updates cursor history
  - All systems work together without conflicts

#### Task 6.2: Enhanced Visualizations

- [ ] Add animations for all DS operations
- [ ] Color coding for different operations
- [ ] Improve layout and spacing
- [ ] Add legends/labels
- [ ] Responsive design considerations

- **Tests Required:**
  - Visual tests (can be manual/screenshot)

#### Task 6.3: Documentation & Demo

- [ ] Add inline code comments
- [ ] Create usage guide
- [ ] Add keyboard shortcuts reference
- [ ] Create demo scenarios
- [ ] Performance considerations documented

- **Tests Required:**
  - All tests passing
  - Test coverage report generated

---

## Testing Strategy

### Test Structure

```
/tests
  /data-structures
    array.test.js
    stack.test.js
    queue.test.js
    linked-list.test.js
    doubly-linked-list.test.js
  /components
    text-buffer.test.js
    undo-manager.test.js
    cursor-history.test.js
    macro-recorder.test.js
    version-manager.test.js
  /integration
    full-system.test.js
```

### Test Coverage Goals

- Minimum 80% code coverage
- All data structure methods tested
- Edge cases covered
- Integration tests for system interactions

### Running Tests

```bash
npm test                 # Run all tests
npm test -- --watch      # Watch mode
npm test -- --coverage   # Coverage report
```

---

## Success Criteria

### Core Requirements Met When:

- ✅ All 5 data structures implemented with full test coverage
- ✅ Each DS has clear visual representation
- ✅ User can interact with each DS's operations
- ✅ All tests passing
- ✅ Can demonstrate LIFO (stack) vs FIFO (queue) visually
- ✅ Can demonstrate single vs double linked traversal

### Learning Objectives Achieved When:

- You can explain why each DS fits its role
- You can identify performance characteristics of each DS
- You understand when to use each structure
- You can implement each from scratch without looking at code

---

## Future Enhancements (Optional)

- [ ] Visual complexity analysis (Big O) for operations
- [ ] Performance benchmarking
- [ ] Additional DS: Tree for syntax parsing
- [ ] Additional DS: Hash map for command lookup
- [ ] Export/import functionality
- [ ] Multiple file tabs using arrays
