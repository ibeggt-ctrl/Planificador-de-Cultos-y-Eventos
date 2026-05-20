# 📅 IBEG Chiquimula - Planificador de Cultos v3.0

**Sistema integral de planificación de cultos con inteligencia artificial, banco de voluntarios, asignaciones automáticas y analytics**

🌐 **Sitio en vivo**: https://planificador-de-cultos-ibeg1.vercel.app

---

## ✨ Características Principales (v3.0)

### 📅 **Planificación de Cultos**
- ✅ Crear, editar y eliminar cultos
- ✅ Estructura completa: Bienvenida → Adoración → Ofrenda → Predicación
- ✅ Múltiples canciones con roles: Líder, Voz Líder, Voces Secundarias
- ✅ Santa Cena y Bautizos (checkboxes)
- ✅ Personal de Apoyo (Sonido, Proyección)
- ✅ Fechas y horarios exactos

### 👥 **Banco de Voluntarios (NUEVO v3.0)**
- ✅ Registro completo: Nombre, Teléfono, Correo, WhatsApp, Ministerios
- ✅ Base de datos reutilizable
- ✅ Datos listos para automatizar (contactos)
- ✅ Gestión simple de voluntarios

### 📍 **Asignación de Voluntarios por Culto (NUEVO v3.0)**
- ✅ Selector modal inteligente
- ✅ Asignar voluntarios del banco a cada culto
- ✅ Múltiples voluntarios por culto
- ✅ Visualización clara de asignaciones

### 📢 **Sistema de Anuncios**
- ✅ Crear anuncios por ministerio
- ✅ Vincular a fecha de culto
- ✅ Responsable y descripción
- ✅ **Auto-incluidos en PDF** si la fecha coincide

### 📊 **Analytics e Historial (NUEVO v3.0)**
- ✅ Gráfica de Predicadores más activos (barras)
- ✅ Gráfica de Líderes de Adoración (dona)
- ✅ Ranking de Participación General (top 15)
- ✅ Datos actualizados automáticamente
- ✅ Historial completo de participación

### 📥 **PDF Inteligente (MEJORADO v3.0)**
- ✅ Incluye automáticamente anuncios por fecha
- ✅ Incluye automáticamente voluntarios asignados
- ✅ Muestra Voz Líder en canciones ✨ NUEVO
- ✅ Muestra Voces Secundarias ✨ NUEVO
- ✅ Orden de servicio completa en un documento
- ✅ Contactos de responsables (correo, whatsapp)

### 🔐 **Sistema de Usuarios**
- ✅ Login seguro
- ✅ Rol de Admin (acceso total)
- ✅ Roles diferenciados por permiso
- ✅ Sesión persistente

### 📱 **PWA (App Móvil)**
- ✅ Instalable en iOS/Android
- ✅ Funciona offline
- ✅ Sincronización de datos
- ✅ Atajos rápidos

---

## 🎯 Novedades v3.0

### Antes (v2.0)
```
Cultos → Voluntarios → Anuncios → Bienvenida → Reportes
(Sin conexión entre datos)
```

### Ahora (v3.0)
```
Cultos → Banco Voluntarios → Asignaciones → Anuncios → Analytics
(Datos conectados automáticamente)
```

### ✨ Mejoras Clave

**1. PDF Automático Completo**
- Anuncios se incluyen por fecha
- Voluntarios se muestran en PDF
- Canciones con todos los detalles

**2. Banco de Voluntarios Profesional**
- Nombre, Correo, WhatsApp, Teléfono
- Listo para automatizar notificaciones
- Reutilizable cada mes

**3. Asignación Inteligente**
- Selecciona voluntarios por culto
- Múltiples asignaciones por evento
- Vista clara de quién va a qué culto

**4. Analytics en Tiempo Real**
- Gráficas de participación
- Ranking de más activos
- Identificar rotaciones necesarias

---

## 📊 Comparativa de Versiones

| Característica | v1.0 | v2.0 | v3.0 |
|---|---|---|---|
| Cultos | ✅ | ✅ | ✅ |
| Login | ❌ | ✅ | ✅ |
| Voluntarios | ❌ | ✅ | ✅✨ |
| Banco de Voluntarios | ❌ | ❌ | ✅ |
| Asignaciones por Culto | ❌ | ❌ | ✅ |
| Anuncios Automáticos | ❌ | ❌ | ✅ |
| PDF Completo | ❌ | Parcial | ✅ |
| Canciones con Voces | ❌ | Parcial | ✅ |
| Analytics | ❌ | ❌ | ✅ |
| Gráficas | ❌ | ❌ | ✅ |
| PWA | ❌ | ✅ | ✅ |

---

## 🚀 Cómo Usar v3.0

### Flujo Recomendado

**Semana 1: Crear Banco de Voluntarios**
1. Pestaña "Banco Voluntarios"
2. "+ Agregar Voluntario" para cada persona
3. Llenar: Nombre, Teléfono, Correo, WhatsApp, Ministerios
4. Guardar

**Semana 2: Planificar Cultos**
1. Pestaña "Cultos"
2. "+ Nuevo Culto" para cada domingo
3. Llenar detalles (tema, serie, canciones, etc.)
4. Guardar

**Semana 3: Asignar Voluntarios**
1. Pestaña "Asignaciones"
2. Para cada culto, "+ Asignar"
3. Seleccionar voluntarios del banco
4. Guardar

**Semana 4: Agregar Anuncios**
1. Pestaña "Anuncios"
2. "+ Nuevo Anuncio"
3. **IMPORTANTE**: Poner la FECHA del culto
4. Guardar

**Descarga PDF:**
1. Pestaña "Cultos"
2. Busca el culto
3. Click "📥 PDF"
4. ¡Listo! Incluye todo automáticamente

**Ver Analytics:**
1. Pestaña "Analytics"
2. Gráficas de participación
3. Ranking de voluntarios más activos

---

## 🔑 Usuarios Demo

```
ADMIN:
  Email: eddy@ibeg.com
  Contraseña: 123456
  Acceso: Todo
```

---

## 💾 Datos Almacenados

Todo se guarda en **localStorage** del navegador:

- `cultos_ibeg` - Cultos planificados
- `voluntarios_banco` - Banco de voluntarios
- `asignaciones_voluntarios` - Asignaciones por culto
- `anuncios_ibeg` - Anuncios
- `historial_ibeg` - Datos históricos
- `usuario_ibeg` - Usuario actualmente logueado

---

## 📱 Instalación como App Móvil

### iOS (iPhone/iPad)
1. Safari: Abre la app
2. Compartir → "Agregar a pantalla de inicio"
3. ¡Listo!

### Android (Chrome)
1. Chrome: Abre la app
2. Menú ⋮ → "Instalar app"
3. ¡Listo!

---

## 🛠️ Tecnologías

- **Frontend**: HTML5, CSS3, JavaScript puro
- **Gráficas**: Chart.js (CDN)
- **PDFs**: jsPDF + jsPDF-AutoTable
- **PWA**: Service Workers, Manifest
- **Almacenamiento**: localStorage
- **Hosting**: Vercel (gratis, HTTPS, 24/7)

---

## 📋 Estructura de Datos

### Voluntario
```javascript
{
  id: 1234567890,
  nombre: "Juan García Pérez",
  telefono: "+502 7000-1234",
  correo: "juan@gmail.com",
  whatsapp: "+502 7000-1234",
  ministerios: ["Adoración", "Sonido"]
}
```

### Asignación
```javascript
{
  cultoId: 9876543210,
  voluntarios: [
    { id: 1234567890, nombre: "Juan García", ... },
    { id: 1111111111, nombre: "María López", ... }
  ]
}
```

### Culto
```javascript
{
  id: 5678901234,
  fecha: "2026-05-24",
  hora: "10:00",
  tema: "La Gracia de Dios",
  serie: "Fundamentos",
  pasaje: "Efesios 2:8-9",
  canciones: [
    {
      nombre: "Con Cristo",
      lider: "Pedro",
      vozLider: "Ana",
      vocesSecundarias: "Luis, Sofía"
    }
  ],
  predicador: "Eddy Osorio",
  sonido: "Juan",
  proyeccion: "María"
}
```

---

## 🔄 Sincronización (Próximas Mejoras)

**Fase 4 - Automatizaciones:**
- [ ] Notificaciones por WhatsApp
- [ ] Recordatorios por correo
- [ ] Integración Google Calendar
- [ ] Respaldos Google Drive
- [ ] Exportación Excel

---

## 📞 Soporte

**IBEG Chiquimula**  
Pastor Eddy Osorio  
📧 eddyosorio92@gmail.com

---

## 📄 Licencia

Uso interno exclusivo de IBEG Chiquimula

---

**Versión**: 3.0.0  
**Estado**: ✅ En producción  
**Última actualización**: Mayo 2026  
**Desarrollado por**: Anthropic Claude + Eddy Osorio

---

## 🎯 Próximas Fases

### Fase 4 (Automatizaciones)
- WhatsApp API
- Correos automáticos
- Notificaciones

### Fase 5 (Backend)
- Google Sheets sync
- Multi-usuario real
- Respaldos automáticos

### Fase 6 (Expansión)
- App mobile nativa
- Dashboard web
- API pública

---

Made with ❤️ for IBEG Chiquimula 🙌
