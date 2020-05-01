
/*global A11yDialog*/

const spiritMenus = function() {
	if (typeof A11yDialog !== "function") {
			return;
	}

	const menus = Array.from(document.querySelectorAll('.spirit-menu-wrapper > .spirit-menu'));

	// Return early if there's no menus.
	if (!menus) {
			return;
	}

	// Defaults
	const defaults = {
			container: '#spirit-shell-main',
			noScrollClass: '-spirit-no-scroll'
	};

	menus.forEach(item => {
			const menu = new A11yDialog(item, defaults.container);
			const spiritMenu = item.querySelector('.spirit-menu__nav');

			const maybeDisableEscToClose = (e) => {
					if (spiritMenu && spiritMenu.getAttribute('role') === 'alertdialog' && e.which === 27) {
							e.preventDefault();
					}
			};

			menu.on('show', function (el) {

					// Ensure focus is on first item - wait until animation finished first
					spiritMenu.addEventListener('transitionend', transitionEndCallback);

					function transitionEndCallback() {
							const focusableChildren = spiritMenu.querySelectorAll('.spirit-menu__list' );
							const focused = focusableChildren[0];

							if (focused) {
									focused.focus();
							}

							spiritMenu.removeEventListener('transitionend', transitionEndCallback);
					}

					document.body.classList.add(defaults.noScrollClass);
					document.addEventListener('keydown', maybeDisableEscToClose);
			});

			menu.on('hide', function (el) {
					document.body.classList.remove(defaults.noScrollClass);
					document.removeEventListener('keydown', maybeDisableEscToClose);
			});
	});
};

spiritMenus();
