# 📅 IBEG Chiquimula - Planificador de Cultos v2.0

**Sistema integral de planificación de cultos, gestión de voluntarios, anuncios y reportes para IBEG Chiquimula**

🌐 **Sitio en vivo**: [planificador-de-cultos-ibeg1.vercel.app](https://planificador-de-cultos-ibeg1.vercel.app)

---

## ✨ Características Principales

### 📅 Planificación de Cultos
- ✅ Crear, editar y eliminar cultos
- ✅ Gestión completa de estructura: Bienvenida → Adoración → Ofrenda → Predicación
- ✅ Múltiples canciones con roles (Líder, Voz Líder, Responsable)
- ✅ Santa Cena y Bautizos (checkboxes)
- ✅ Personal de Apoyo (Sonido, Proyección)
- ✅ Generación automática de PDF

### 👥 Gestión de Voluntarios
- ✅ Registro con Nombre, Teléfono, Ministerios
- ✅ Roles: Voluntario, Líder Ministerial, Coordinador
- ✅ Tabla filtrable con historial de participación

### 📢 Sistema de Anuncios
- ✅ Anuncios por ministerio
- ✅ Vinculación a cultos
- ✅ Incluidos en PDFs generados

### 🚪 Asignación de Bienvenida
- ✅ Calendario de servidores de bienvenida
- ✅ Dos personas por culto
- ✅ Historial editable

### 📊 Reportes
- ✅ Estadísticas en tiempo real
- ✅ Ranking de participación
- ✅ Próximos cultos
- ✅ Gráficos y análisis

### 🔐 Sistema de Usuarios (6 usuarios)
```
ADMIN (1):           eddy@ibeg.com / 123456
EDITORES (3):        carlos@ibeg.com, juan@ibeg.com, ana@ibeg.com / 123456
LECTORES (2):        maria@ibeg.com, pedro@ibeg.com / 123456
```

### 📱 PWA (Aplicación Móvil)
- ✅ Instalable como app nativa
- ✅ Funciona offline
- ✅ Sincronización de datos
- ✅ Atajos rápidos en pantalla

---

## 🎯 Permisos por Rol

| Acción | Admin | Editor | Lector |
|--------|-------|--------|--------|
| Ver Cultos | ✅ | ✅ | ✅ |
| Crear Cultos | ✅ | ✅ | ❌ |
| Editar Cultos | ✅ | ✅ | ❌ |
| Eliminar Cultos | ✅ | ❌ | ❌ |
| Gestionar Voluntarios | ✅ | ❌ | ❌ |
| Crear Anuncios | ✅ | ✅ | ❌ |
| Ver Reportes | ✅ | ✅ | ✅ |

---

## 📂 Estructura del Proyecto

```
planificador-de-cultos-ibeg/
├── index.html              # App completa (HTML + CSS + JS)
├── sw.js                   # Service Worker (offline)
├── manifest.json           # Configuración PWA
├── package.json            # Metadata (pequeño)
├── vercel.json             # Config Vercel
├── .gitignore              # Archivos a ignorar
└── README.md               # Documentación
```

---

## 🚀 Instrucciones para Actualizar GitHub y Vercel

### PASO 1: Preparar los archivos en tu computadora

```bash
# 1. Abre tu terminal/PowerShell
# 2. Ve a la carpeta del proyecto
cd ruta/a/planificador-de-cultos-ibeg

# 3. Verifica que estés en la rama main
git status
```

### PASO 2: Actualizar los archivos

Descarga los siguientes archivos y colócalos en la carpeta raíz del proyecto:

1. ✅ **index.html** - Reemplaza el anterior
2. ✅ **sw.js** - Archivo NUEVO
3. ✅ **manifest.json** - Archivo NUEVO
4. ✅ **README.md** - Reemplaza el anterior
5. ✅ **package.json** - Archivo pequeño
6. ✅ **vercel.json** - Archivo pequeño
7. ✅ **.gitignore** - Archivo pequeño

### PASO 3: Subir a GitHub

```bash
# 1. Ver cambios detectados
git status

# 2. Agregar todos los cambios
git add .

# 3. Hacer commit con mensaje descriptivo
git commit -m "feat: Actualizar app v2.0 con login, multi-usuario, voluntarios, anuncios"

# 4. Empujar a GitHub (main)
git push origin main
```

### PASO 4: Vercel redeploy automático

✅ **Vercel detecta automáticamente** los cambios en GitHub  
✅ **Redeploy comienza automáticamente**  
✅ **Espera 2-5 minutos**  

Verifica en: https://vercel.com/dashboard

---

## 💾 Datos y Almacenamiento

**Ubicación**: localStorage del navegador

| Clave | Contenido |
|-------|-----------|
| `cultos_ibeg` | Array de cultos |
| `voluntarios_ibeg` | Array de voluntarios |
| `anuncios_ibeg` | Array de anuncios |
| `bienvenidas_ibeg` | Array de bienvenidas |
| `usuario_ibeg` | Usuario logueado |

⚠️ **Nota**: Los datos se pierden si limpias el cache. Para persistencia real, requiere Fase 2 (backend).

---

## 🔧 Configuración de Archivos

### package.json
```json
{
  "name": "planificador-de-cultos-ibeg",
  "version": "2.0.0",
  "private": true,
  "scripts": {
    "build": "echo 'Static site ready'"
  }
}
```

### vercel.json
```json
{
  "buildCommand": "echo 'Static site ready'",
  "outputDirectory": "."
}
```

### .gitignore
```
node_modules/
.env
.env.local
.vercel/
dist/
build/
*.log
.DS_Store
```

---

## 🐛 Troubleshooting

### Los datos no se guardan
```
✅ Abre DevTools (F12)
✅ Pestaña "Application" → "Local Storage"
✅ Busca "cultos_ibeg", "voluntarios_ibeg", etc.
```

### El PDF no genera
```
✅ Verifica DevTools → Network → jspdf
✅ Intenta en navegador privado
✅ Limpia cache (Ctrl+Shift+Supr)
```

### Service Worker no sincroniza
```
✅ La app requiere HTTPS (Vercel lo provee automáticamente)
✅ DevTools → Application → Service Workers
✅ Verifica la pestaña "Cache Storage"
```

---

## 📈 Métricas de la App

- **Usuarios**: 6 demo pre-configurados
- **Cultos**: Sin límite
- **Voluntarios**: Sin límite
- **Anuncios**: Sin límite
- **Datos almacenados**: localStorage (sincronización manual)
- **Disponibilidad**: 24/7 en Vercel

---

## 🔐 Seguridad

⚠️ **IMPORTANTE**:
- Los usuarios demo son PARA TESTING SOLAMENTE
- Los datos en localStorage son PÚBLICOS (visible en DevTools)
- Para producción real, implementar:
  - Autenticación con Gmail/OAuth
  - Backend seguro (Node.js, Python, Go)
  - Base de datos encriptada
  - HTTPS (ya incluido en Vercel)

---

## 📱 Instalación como App Móvil

### iOS (Safari)
1. Abre la app en Safari
2. Toca compartir
3. "Agregar a pantalla de inicio"
4. Elige nombre y color

### Android (Chrome)
1. Abre la app en Chrome
2. Menú (⋮) → "Instalar app"
3. Confirma
4. Icono aparece en pantalla de inicio

---

## 🎨 Paleta de Colores

```
Cyan Principal:    #00A4CC  ← Logo IBEG
Azul Oscuro:       #003D5C  ← Headers
Blanco:            #FFFFFF  ← Fondos
Gris Claro:        #F3F4F6  ← Fondos secundarios
Verde Éxito:       #10B981  ← Estado exitoso
Naranja:           #F59E0B  ← Advertencias
Rojo Peligro:      #EF4444  ← Eliminar
```

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (sin frameworks)
- **PDF**: jsPDF + jsPDF-AutoTable
- **PWA**: Service Worker, Manifest.json
- **Almacenamiento**: localStorage
- **Hosting**: Vercel (estático, gratis)
- **Versionamiento**: Git + GitHub

---

## 📞 Soporte

**IBEG Chiquimula**  
Pastor Eddy Osorio  
📧 eddyosorio92@gmail.com  
📍 Chiquimula, Guatemala

---

## 📄 Licencia

Uso interno exclusivo de IBEG Chiquimula.

---

**Versión**: 2.0.0  
**Estado**: ✅ En producción  
**Última actualización**: Mayo 2026  
**Desarrollado por**: Anthropic Claude + Eddy Osorio

---

## 🚀 Próximas Fases (Roadmap)

### Fase 2 (Backend)
- [ ] Google Sheets integration
- [ ] Google Calendar sync
- [ ] Autenticación con Gmail
- [ ] WhatsApp notifications
- [ ] Real-time multi-user sync
- [ ] Backup automático

### Fase 3 (Analytics)
- [ ] Estadísticas avanzadas
- [ ] Gráficos de participación
- [ ] Reportes mensuales
- [ ] Exportación a Excel

### Fase 4 (Expansión)
- [ ] App mobile nativa (React Native)
- [ ] Dashboard web completo
- [ ] API pública para integraciones
- [ ] Sistema de notificaciones push

---

¡Gracias por usar IBEG Planificador! 🙌
