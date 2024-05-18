export const sharedConfig = {
    socialLinks: [
        { icon: 'facebook', link: 'https://www.facebook.com/VUstudentuatstovybe' },
        { icon: 'instagram', link: 'https://www.instagram.com/vustudentuatstovybe/' },
        { icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1024 1024"><path d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3c0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8c24.9-25 24.9-65.5-.1-90.5z" fill="currentColor"></path></svg>'
        }, link: 'https://www.vusa.lt' },
    ],

      search: {
        provider: 'local',
        options: {
          disableDetailedView: true,
          locales: {
            root: {
              translations: {
                button: {
                  buttonText: 'Ieškoti',
                  buttonAriaLabel: 'Ieškoti',
                },
                modal: {
                  noResultsText: 'Nerasta',
                  resetButtonTitle: 'Išvalyti',
                  footer: {
                    selectText: 'Pasirinkti',
                    navigateText: 'Naviguoti',
                    closeText: 'Uždaryti',
                  }
                }
              }
            }
          }
        }
      }
    }
