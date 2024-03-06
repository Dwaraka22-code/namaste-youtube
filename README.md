# YouTube Project

- Setting up React app and Tailwind CSS
- Build Header Component
- Build Body Component
  - Build Sidebar component with Menu Items in Body Component
  - Build Main Container Component in Body
    - Build ButtonList and Video Container with Video Cards in Main Container
- Build Watch Page

- Debouncing: (if typing very fast - difference between 2 key strokes is very less, i ftyping slow - diff btw 2 key strokes is high)
  - typing slow = 200ms
  - typing fast = 30ms (doesnot need suggestions for inetermediate results - it's useless to call api for every keystroke)
- Performance:
  - iphone pro max = 12 letter \* 1000 = 12000 api calls
  - with debouncing = 3 api calls \* 1000 = 3000 api calls
- Debouncing with 200ms

  - if diff btw 2 key strokes is <200ms (typing very fast) - DECLINE API CALL
  - if diff btw 2 key strokes is >200ms (slow) - MAKE AN API CALL & SHOW THE SUGGESTIONS(CACHE RESULTS)

- Build Live Chat Feature
