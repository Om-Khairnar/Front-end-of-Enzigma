<div class="task-container">
  <h2>Tasks</h2>
  <button>New Task</button>
  <button>Refresh</button>
  <div class="search-container">
    <mat-form-field class="search-field" appearance="outline">
      <mat-label>Search</mat-label>
      <input matInput />
      <!-- [(ngModel)]="searchTerm"-->
      <button mat-icon-button matSuffix>
        <!--(click)="onSearch()"-->
        <mat-icon>search</mat-icon>
      </button>
    </mat-form-field>
  </div>
  
  <table>
    <thead>
      <tr>
        <th>Assinged To</th>
        <th>Status</th>
        <th>Due Date</th>
        <th>Priority</th>
        <th>Comments</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      @for(task of tasks; track $index){
      <tr>
        <td>{{ task.user }}</td>
        <td>{{ task.status }}</td>
        <td>{{ task.dueDate }}</td>
        <td>{{ task.priority }}</td>
        <td>{{ task.description }}</td>
        <td>
          <button>Edit</button>
          <!--  (click)="onEdit(task)" -->
          <button>Delete</button>
          <!-- (click)="onDelete(task.id)" -->
        </td>
      </tr>
      }
    </tbody>
  </table>
</div>


table {
    width: 90%;
    border-collapse: collapse;
  }
  
  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  
  th {
    background-color: #f4f4f4;
  }
  
  button {
    margin-right: 5px;
  }
  
  .search-container {
    display: flex;
    justify-content: flex-start; /* Aligns the search bar to the left */
    margin-bottom: 16px; /* Adds spacing below the search bar */
  }
  
  .search-field {
    width: 300px; /* Set the width of the search bar */
    margin-left: 67%; /* Adds spacing to the right of the search bar */
  }
  
  


  code of new task -->

  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com?plugins=forms,typography"></script>
		<script src="https://unpkg.com/unlazy@0.11.3/dist/unlazy.with-hashing.iife.js" defer init></script>
		<script type="text/javascript">
			window.tailwind.config = {
				darkMode: ['class'],
				theme: {
					extend: {
						colors: {
							border: 'hsl(var(--border))',
							input: 'hsl(var(--input))',
							ring: 'hsl(var(--ring))',
							background: 'hsl(var(--background))',
							foreground: 'hsl(var(--foreground))',
							primary: {
								DEFAULT: 'hsl(var(--primary))',
								foreground: 'hsl(var(--primary-foreground))'
							},
							secondary: {
								DEFAULT: 'hsl(var(--secondary))',
								foreground: 'hsl(var(--secondary-foreground))'
							},
							destructive: {
								DEFAULT: 'hsl(var(--destructive))',
								foreground: 'hsl(var(--destructive-foreground))'
							},
							muted: {
								DEFAULT: 'hsl(var(--muted))',
								foreground: 'hsl(var(--muted-foreground))'
							},
							accent: {
								DEFAULT: 'hsl(var(--accent))',
								foreground: 'hsl(var(--accent-foreground))'
							},
							popover: {
								DEFAULT: 'hsl(var(--popover))',
								foreground: 'hsl(var(--popover-foreground))'
							},
							card: {
								DEFAULT: 'hsl(var(--card))',
								foreground: 'hsl(var(--card-foreground))'
							},
						},
					}
				}
			}
		</script>
		<style type="text/tailwindcss">
			@layer base {
				:root {
					--background: 0 0% 100%;
--foreground: 240 10% 3.9%;
--card: 0 0% 100%;
--card-foreground: 240 10% 3.9%;
--popover: 0 0% 100%;
--popover-foreground: 240 10% 3.9%;
--primary: 240 5.9% 10%;
--primary-foreground: 0 0% 98%;
--secondary: 240 4.8% 95.9%;
--secondary-foreground: 240 5.9% 10%;
--muted: 240 4.8% 95.9%;
--muted-foreground: 240 3.8% 46.1%;
--accent: 240 4.8% 95.9%;
--accent-foreground: 240 5.9% 10%;
--destructive: 0 84.2% 60.2%;
--destructive-foreground: 0 0% 98%;
--border: 240 5.9% 90%;
--input: 240 5.9% 90%;
--ring: 240 5.9% 10%;
--radius: 0.5rem;
				}
				.dark {
					--background: 240 10% 3.9%;
--foreground: 0 0% 98%;
--card: 240 10% 3.9%;
--card-foreground: 0 0% 98%;
--popover: 240 10% 3.9%;
--popover-foreground: 0 0% 98%;
--primary: 0 0% 98%;
--primary-foreground: 240 5.9% 10%;
--secondary: 240 3.7% 15.9%;
--secondary-foreground: 0 0% 98%;
--muted: 240 3.7% 15.9%;
--muted-foreground: 240 5% 64.9%;
--accent: 240 3.7% 15.9%;
--accent-foreground: 0 0% 98%;
--destructive: 0 62.8% 30.6%;
--destructive-foreground: 0 0% 98%;
--border: 240 3.7% 15.9%;
--input: 240 3.7% 15.9%;
--ring: 240 4.9% 83.9%;
				}
			}
		</style>
  </head>
  <body>
    <div class="max-w-md mx-auto p-4 bg-card rounded-lg shadow-md">
    <h2 class="text-lg font-semibold mb-4">New Task</h2>
    <form class="grid grid-cols-2 gap-4">
        <div class="mb-4">
            <label class="block text-sm font-medium text-muted-foreground" for="assignedTo">* Assigned To</label>
            <select id="assignedTo" class="mt-1 block w-full border border-border rounded-md p-2">
                <option>User 1</option>
                <option>User 2</option>
                <option>User 3</option>
            </select>
        </div>
        <div class="mb-4">
            <label class="block text-sm font-medium text-muted-foreground" for="status">* Status</label>
            <select id="status" class="mt-1 block w-full border border-border rounded-md p-2">
                <option>Not Started</option>
                <option>In Progress</option>
                <option>Completed</option>
            </select>
        </div>
        <div class="mb-4">
            <label class="block text-sm font-medium text-muted-foreground" for="dueDate">Due Date</label>
            <input type="date" id="dueDate" class="mt-1 block w-full border border-border rounded-md p-2" />
        </div>
        <div class="mb-4">
            <label class="block text-sm font-medium text-muted-foreground" for="priority">* Priority</label>
            <select id="priority" class="mt-1 block w-full border border-border rounded-md p-2">
                <option>Normal</option>
                <option>High</option>
                <option>Low</option>
            </select>
        </div>
        <div class="col-span-2 mb-4">
            <label class="block text-sm font-medium text-muted-foreground" for="description">Description</label>
            <textarea id="description" rows="4" class="mt-1 block w-full border border-border rounded-md p-2"></textarea>
        </div>
        <div class="col-span-2 flex justify-end space-x-2">
            <button type="button" class="bg-secondary text-secondary-foreground hover:bg-secondary/80 p-2 rounded-md">Cancel</button>
            <button type="submit" class="bg-destructive text-destructive-foreground hover:bg-destructive/80 p-2 rounded-md">Save</button>
        </div>
    </form>
</div>

  </body>
</html>







<td>
          <button [routerLink]="'/tasks/'+task._id">Edit</button>
          
          <button (click)="delete(task._id!)">Delete</button>
          
        </td>





        <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Custom Dropdown Component</title>
  <style>
    /* Add your custom styles here */
  </style>
</head>
<body>
  <custom-dropdown></custom-dropdown>

  <script>
    // Shared Tailwind CSS classes
    const TW_HIDDEN = 'hidden';
    const TW_FLEX = 'flex';
    const TW_ITEMS_CENTER = 'items-center';
    const TW_SPACE_X_2 = 'space-x-2';
    const TW_TEXT_MUTED_FOREGROUND = 'text-muted-foreground';
    const TW_RELATIVE = 'relative';
    const TW_ABSOLUTE = 'absolute';
    const TW_RIGHT_0 = 'right-0';
    const TW_MT_2 = 'mt-2';
    const TW_W_48 = 'w-48';
    const TW_BG_CARD = 'bg-card';
    const TW_BORDER = 'border';
    const TW_BORDER_BORDER = 'border-border';
    const TW_ROUNDED_LG = 'rounded-lg';
    const TW_SHADOW_LG = 'shadow-lg';
    const TW_Z_10 = 'z-10';
    const TW_GROUP_HOVER_BLOCK = 'group-hover:block';
    const TW_PY_1 = 'py-1';
    const TW_HOVER_BG_MUTED = 'hover:bg-muted';
    const TW_BLOCK = 'block';
    const TW_PX_4 = 'px-4';
    const TW_PY_2 = 'py-2';
    const TW_TEXT_SECONDARY_FOREGROUND = 'text-secondary-foreground';
    const TW_BG_SECONDARY = 'bg-secondary';
    const TW_P_2 = 'p-2';
    const TW_ROUNDED_LG = 'rounded-lg';
    const TW_FOCUS_OUTLINE_NONE = 'focus:outline-none';
    const TW_W_4 = 'w-4';
    const TW_H_4 = 'h-4';
    const TW_INLINE_BLOCK = 'inline-block';

    // Custom Dropdown Component
    class CustomDropdown extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
      }

      connectedCallback() {
        const button = this.shadowRoot.querySelector('button');
        const dropdown = this.shadowRoot.querySelector('.absolute');

        button.addEventListener('click', () => {
          dropdown.classList.toggle(TW_HIDDEN);
        });

        document.addEventListener('click', (event) => {
          if (!button.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.classList.add(TW_HIDDEN);
          }
        });
      }

      render() {
        this.shadowRoot.innerHTML = `
          <style>
            /* Add your component-specific styles here */
          </style>
          <div class="${TW_FLEX} ${TW_ITEMS_CENTER} ${TW_SPACE_X_2}">
            <span class="${TW_TEXT_MUTED_FOREGROUND}">this task is good</span>
            <div class="${TW_RELATIVE}">
              <button class="${TW_BG_SECONDARY} ${TW_TEXT_SECONDARY_FOREGROUND} ${TW_P_2} ${TW_ROUNDED_LG} ${TW_FOCUS_OUTLINE_NONE}">
                Options
                <svg class="${TW_W_4} ${TW_H_4} ${TW_INLINE_BLOCK}" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.5 8l4.5 4.5L15.5 8z"/>
                </svg>
              </button>
              <div class="${TW_ABSOLUTE} ${TW_RIGHT_0} ${TW_MT_2} ${TW_W_48} ${TW_BG_CARD} ${TW_BORDER} ${TW_BORDER_BORDER} ${TW_ROUNDED_LG} ${TW_SHADOW_LG} ${TW_Z_10} ${TW_HIDDEN} ${TW_GROUP_HOVER_BLOCK}">
                <ul class="${TW_PY_1}">
                  <li class="${TW_HOVER_BG_MUTED}">
                    <a href="#" class="${TW_BLOCK} ${TW_PX_4} ${TW_PY_2} ${TW_TEXT_SECONDARY_FOREGROUND}">Edit</a>
                  </li>
                  <li class="${TW_HOVER_BG_MUTED}">
                    <a href="#" class="${TW_BLOCK} ${TW_PX_4} ${TW_PY_2} ${TW_TEXT_SECONDARY_FOREGROUND}">Delete</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        `;
      }
    }

    customElements.define('custom-dropdown', CustomDropdown);
  </script>
</body>
</html>
       